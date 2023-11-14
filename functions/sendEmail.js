import { createTransport } from 'nodemailer';

export async function handler(event, context) {
  const data = JSON.parse(event.body);

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'sounak.guha7512@gmail.com',
      pass: 'Sou@751211'
    }
  });

  const mailOptions = {
    from: data.email,
    to: "darkinstarpro@gmail.com",
    subject: `Message from Portfolio : ${data.name}`,
    text: data.message
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: 'Email sent successfully!'
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message })
    };
  }
}
