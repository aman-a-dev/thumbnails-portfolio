import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      height={40}
      width={40}
      alt="logo"
      className="w-50"
      loading="eager"
      style={{ width: "50px", height: "auto" }}
    />
  );
}
