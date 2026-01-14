import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import { Construct } from "constructs";

export class FbmcBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket for storing meme images - private access only through CloudFront
    const imagesBucket = new s3.Bucket(this, "FbmcImagesBucket", {
      bucketName: `fbmc-${cdk.Aws.REGION}`,
      // No CORS needed - all access goes through CloudFront, not directly to S3
      // Completely block all public access
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      // Enforce SSL connections
      enforceSSL: true,
      // Ensure bucket is private
      accessControl: s3.BucketAccessControl.PRIVATE,
    });

    // CloudFront distribution for serving images
    // Uses Origin Access Control (OAC) to securely access private S3 bucket
    const distribution = new cloudfront.Distribution(this, "FbmcDistribution", {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(imagesBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        // Only allow GET and HEAD methods for image serving
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
      },
    });

    // Output important values
    new cdk.CfnOutput(this, "ImagesBucketName", {
      value: imagesBucket.bucketName,
      description: "Name of the S3 bucket for storing images",
    });

    new cdk.CfnOutput(this, "CloudFrontDomain", {
      value: distribution.distributionDomainName,
      description: "CloudFront distribution domain for serving images",
    });
  }
}
