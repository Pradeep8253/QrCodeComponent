import Image from "next/image";
import QrCodeComponent from "./QrCodeComponent";

export default function Home() {
  return (
    <div className="container mx-auto">
      <QrCodeComponent />
    </div>
  );
}
