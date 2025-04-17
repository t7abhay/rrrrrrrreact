/* what  inside a home page */
import LoginPage from "./LoginPage.tsx";
import RegistrationPage from "./RegistrationPage.tsx";
import LinkErrorPage from "./NotFounPage.tsx";
function HomePage() {
  return (
    <>
      {/* <RegistrationPage /> */}
      {/* <LoginPage /> */}
      <LinkErrorPage />
    </>
  );
}

export default HomePage;
