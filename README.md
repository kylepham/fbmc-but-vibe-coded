# FBMC - Được Vibe Code với Kiro.dev 🎭🤖

> **⚡ Từ ý tưởng đến sản phẩm hoàn chỉnh chỉ trong một phiên code AI!**

Một ứng dụng lưu trữ meme hiện đại thể hiện sức mạnh của [**Kiro.dev**](https://kiro.dev) - môi trường phát triển AI biến cuộc trò chuyện thành code. Toàn bộ ứng dụng full-stack này được xây dựng thông qua ngôn ngữ tự nhiên, không cần phải code truyền thống!

## 🚀 **Những gì Kiro.dev đã xây dựng:**
- ✨ **Frontend Next.js hoàn chỉnh** với các component UI hiện đại
- 🏗️ **Hạ tầng AWS** với CDK (S3 + CloudFront)  
- �  **Tính năng xem trước trực tiếp** và upload kéo thả
- 🔒 **Bảo mật cấp production** với truy cập S3 riêng tư
- � **Thoiết kế responsive** hoạt động mọi nơi

**Lưu trữ, tổ chức và duyệt bộ sưu tập meme của bạn một cách phong cách - tất cả được hỗ trợ bởi AI! 🎭**

## ✨ Tính năng

- **Upload & Xem trước**: Upload hình ảnh kéo thả với xem trước card trực tiếp
- **Tổ chức thông minh**: Phân loại và tìm kiếm dựa trên tag
- **Giao diện hiện đại**: Giao diện sạch sẽ được xây dựng với Next.js và shadcn/ui
- **Lưu trữ an toàn**: AWS S3 + CloudFront cho việc phân phối hình ảnh nhanh và bảo mật
- **Thiết kế responsive**: Hoạt động hoàn hảo trên mọi thiết bị

## 🏗️ Kiến trúc

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Ứng dụng      │───▶│   CloudFront     │───▶│   S3 Bucket     │
│   Next.js       │    │   (CDN)          │    │   (Lưu trữ)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

- **Frontend**: Next.js 15 với TypeScript và các component shadcn/ui
- **Hạ tầng**: AWS CDK cho infrastructure as code
- **Lưu trữ**: S3 bucket riêng tư với phân phối CloudFront
- **Bảo mật**: Origin Access Control (OAC) - không truy cập S3 trực tiếp

## 🚀 Bắt đầu nhanh

### Yêu cầu
- Node.js 18+
- AWS CLI đã cấu hình (để deploy backend)
- AWS CDK CLI đã cài đặt

### Phát triển Frontend
```bash
cd frontend
npm install
npm run dev
```
Truy cập `http://localhost:3000`

### Deploy Backend
```bash
cd backend
npm install
npm run build
cdk bootstrap  # Chỉ lần đầu tiên
cdk deploy
```

## 📁 Cấu trúc dự án

```
fbmc-but-vibe-coded/
├── frontend/                 # Ứng dụng Next.js
│   ├── app/                 # Các trang App router
│   │   ├── page.tsx         # Trang chủ (duyệt meme)
│   │   ├── upload/          # Trang upload
│   │   └── layout.tsx       # Layout gốc với navbar
│   ├── components/          # Các component React
│   │   ├── ui/              # Các component shadcn/ui
│   │   ├── navbar.tsx       # Thanh điều hướng
│   │   ├── image-grid.tsx   # Hiển thị lưới meme
│   │   └── upload-dialog.tsx # Chức năng upload
│   └── lib/                 # Tiện ích
├── backend/                 # Hạ tầng AWS CDK
│   ├── lib/                 # Định nghĩa CDK stack
│   ├── bin/                 # Điểm vào ứng dụng CDK
│   └── cdk.json            # Cấu hình CDK
└── README.md
```

## 🎨 Giải thích các tính năng chính

### Xem trước Upload trực tiếp
- Xem trước card theo thời gian thực khi bạn nhập mô tả và thêm tag
- Upload file kéo thả với phản hồi trực quan
- Xem chính xác cách meme của bạn sẽ xuất hiện trước khi upload

### Phân phối hình ảnh an toàn
- Tất cả hình ảnh được lưu trữ trong S3 bucket riêng tư
- CloudFront CDN cho phân phối toàn cầu nhanh chóng
- Không truy cập S3 trực tiếp - mọi thứ đều thông qua CloudFront

### Các component UI hiện đại
- Được xây dựng với shadcn/ui cho thiết kế nhất quán, dễ tiếp cận
- Layout lưới responsive cho việc duyệt meme
- Điều hướng sạch sẽ với điều hướng dựa trên logo

## 🛠️ Công nghệ sử dụng

### Frontend
- **Framework**: Next.js 15 với App Router
- **Ngôn ngữ**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React

### Backend
- **Hạ tầng**: AWS CDK (TypeScript)
- **Lưu trữ**: Amazon S3
- **CDN**: Amazon CloudFront
- **Bảo mật**: Origin Access Control (OAC)

## 🔒 Tính năng bảo mật

- **S3 Bucket riêng tư**: Không cho phép truy cập công khai
- **Chỉ CloudFront**: Tất cả truy cập hình ảnh thông qua CDN
- **Bắt buộc HTTPS**: Yêu cầu SSL cho tất cả kết nối
- **Origin Access Control**: Bảo mật AWS hiện đại cho tích hợp S3-CloudFront

## 📝 Ghi chú phát triển

### Frontend
- Sử dụng Next.js 15 với App Router mới
- Tất cả component được render phía client để tương tác
- Xem trước hình ảnh sử dụng `URL.createObjectURL()` cho phản hồi tức thì
- Dọn dẹp object URL đúng cách để tránh rò rỉ bộ nhớ

### Backend
- Hạ tầng tối giản - chỉ S3 và CloudFront
- Không có Lambda function hoặc database để đơn giản
- CDK xử lý tất cả việc tạo và cấu hình tài nguyên AWS
- Xuất CloudFront domain cho cấu hình frontend

## 🚀 Triển khai

1. **Deploy Backend trước**:
   ```bash
   cd backend
   cdk deploy
   ```
   Ghi chú CloudFront domain từ output.

2. **Cập nhật cấu hình Frontend**:
   Cập nhật `next.config.js` với CloudFront domain của bạn.

3. **Deploy Frontend**:
   Deploy lên nền tảng hosting ưa thích của bạn (Vercel, Netlify, v.v.)

## 🤝 Đóng góp

Dự án này được xây dựng với trọng tâm là các thực hành phát triển web hiện đại và sạch sẽ. Hãy thoải mái fork và tùy chỉnh cho nhu cầu lưu trữ meme của riêng bạn!

## 📄 Giấy phép

Giấy phép MIT - hãy thoải mái sử dụng code này cho các dự án của bạn.