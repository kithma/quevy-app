import MainLayout from "./../layouts/MainLayout";
import Head from "next/head";
import MainPage from "../components/main-page/MainPage";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Pick path</title>
      </Head>
      <MainPage />
    </MainLayout>
  )
}
