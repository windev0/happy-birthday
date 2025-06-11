import { account } from "@/lib/appwrite";

const VerificationPage = () => {
  const handleClick = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get("secret") ?? "";
    const userId = urlParams.get("userId") ?? "";

    console.log("object", { userId, secret });

    // verugy
    const verificationResp = await account.updateVerification(userId, secret);
    console.log("verificationResp", verificationResp);
  };
  return (
    <>
      <div>VerificationPage</div>
      <h1 style={{ color: "blue", cursor: "pointer" }} onClick={handleClick}>
        Click here to verify your account
      </h1>
    </>
  );
};

export default VerificationPage;
