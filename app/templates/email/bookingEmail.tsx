// emails/BookingEmail.tsx
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

interface BookingEmailProps {
  name: string;
  email: string;
  date: string;
  message: string;
}

export const BookingEmail = ({ name, email, date, message }: BookingEmailProps) => (
  <Html>
    <Tailwind>
      <Section className="bg-gray-100 py-10 px-4">
        <Container className="bg-white rounded-md shadow-md p-6 mx-auto max-w-lg">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-blue-600">Permintaan Jadwal Baru</h1>
          </div>

          <Text className="text-base text-gray-800 leading-relaxed">Halo Tim Kapita Konsul Sinergi,</Text>

          <Text className="text-base text-gray-800 leading-relaxed mt-2">
            Anda telah menerima permintaan jadwal dari <strong>{name}</strong> melalui formulir website.
          </Text>

          <div className="mt-4 space-y-1 text-base text-gray-800">
            <p>
              <strong>Nama:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Tanggal yang Diinginkan:</strong> {date}
            </p>
            <p>
              <strong>Pesan:</strong> {message}
            </p>
          </div>

          <hr className="my-6 border-t border-gray-300" />

          <Text className="text-xs text-gray-500 text-center">Email ini dikirim secara otomatis dari formulir website Kapita Konsul Sinergi.</Text>
        </Container>
      </Section>
    </Tailwind>
  </Html>
);
