const EditComponent = () => {
  const originalImgSrc = "";
  return (
    <>
      {originalImgSrc ? (
        <img src={originalImgSrc} alt="Imagen original subida por el usuario" />
      ) : null}
      {/* {#if processingImage}
    <div class="flex flex-col justify-center items-center">
      <p class="text-center mt-4">Procesando imagen...</p>
    </div>
  {:else}
    <img src={$modifiedImage} alt="Imagen sin fondo subida por el usuario" />
  {/if} */}

      {/* <a
        download
        href={"$modifiedImage"}
        className="block bg-blue-500 hover:bg-blue-700 text-xl text-center w-full font-bold text-white rounded-full px-4 py-2 mt-10"
      >
        Descargar imagen
      </a> */}
    </>
  );
};

export default EditComponent;
