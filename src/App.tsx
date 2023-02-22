import "./App.css";
import EditComponent from "./components/EditComponent";
import { Layout } from "./components/Layout";
import DropzoneComponent from "./components/Layout/DropzoneComponent";

function App() {
  return (
    <Layout>
      <DropzoneComponent />
      <EditComponent />
      {/* {#if $imageStatus === ImageStatus.READY || $imageStatus === ImageStatus.UPLOADING}
      <StepUpload />
    {:else if $imageStatus === ImageStatus.DONE}
      <StepEdit />
    {/if} */}
    </Layout>
  );
}

export default App;

