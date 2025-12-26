import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST 요청 처리
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, location, privacy_agreed } = body;

    // 환경 변수에서 Gmail 설정값 가져오기
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || gmailUser; // 받는 사람 이메일 (기본값: 보내는 사람)

    // 환경 변수 검증
    if (!gmailUser || !gmailAppPassword) {
      console.error("Gmail 설정이 완료되지 않았습니다.");
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    // 지역명 변환 (한글 표시용)
    const locationMap: { [key: string]: string } = {
      daegu: "대구광역시",
      gyeongbuk: "경상북도",
      other: "기타 지역",
    };
    const locationName = locationMap[location] || location;

    // Nodemailer 트랜스포터 생성 (Gmail SMTP 사용)
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: gmailUser, // Gmail 주소
        pass: gmailAppPassword, // Gmail 앱 비밀번호
      },
      secure: true, // 465 포트를 사용하려면 true
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 이메일 내용 설정
    const mailData = {
      from: gmailUser, // 보내는 사람 주소
      to: recipientEmail, // 받는 사람 주소
      subject: `[어나드범어] 새로운 관심고객 등록 - ${name}님`, // 제목
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #ecb613; padding-bottom: 10px;">
            새로운 관심고객 등록이 접수되었습니다
          </h2>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; font-weight: bold; width: 140px; border: 1px solid #ddd;">성함</td>
              <td style="padding: 12px; background-color: #ffffff; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">연락처</td>
              <td style="padding: 12px; background-color: #ffffff; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">거주지역</td>
              <td style="padding: 12px; background-color: #ffffff; border: 1px solid #ddd;">${locationName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">개인정보 동의</td>
              <td style="padding: 12px; background-color: #ffffff; border: 1px solid #ddd;">${privacy_agreed}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">등록 시간</td>
              <td style="padding: 12px; background-color: #ffffff; border: 1px solid #ddd;">${new Date().toLocaleString("ko-KR")}</td>
            </tr>
          </table>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            이 이메일은 웹사이트 관심고객 등록 폼을 통해 자동으로 발송되었습니다.
          </p>
        </div>
      `,
      text: `
새로운 관심고객 등록이 접수되었습니다

성함: ${name}
연락처: ${phone}
거주지역: ${locationName}
개인정보 동의: ${privacy_agreed}
등록 시간: ${new Date().toLocaleString("ko-KR")}

이 이메일은 웹사이트 관심고객 등록 폼을 통해 자동으로 발송되었습니다.
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailData);

    return NextResponse.json(
      { status: "success", message: "이메일이 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("이메일 발송 오류:", error);
    return NextResponse.json(
      { error: "이메일 전송 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}


