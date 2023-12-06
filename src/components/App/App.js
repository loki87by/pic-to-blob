import React, { useState, useCallback } from "react";
import { useClipboard } from "use-clipboard-copy";

function App() {
  const [fileType, setFileType] = useState("");
  const [filename, setFilename] = useState("");
  const [blobSetted, setBlobSetted] = useState(false);
  const [blob, setBlob] = useState([]);

  const clipboard = useClipboard({
    onError() {
      alert("Произошла непредвиденная ошибка");
    },
  });

  const copyName = useCallback(() => {
    clipboard.copy(`${filename}.${fileType}`);
  }, [clipboard, fileType, filename]);

  const copyData = useCallback(
    (index) => {
      clipboard.copy(blob[index]);
    },
    [blob, clipboard]
  );

  function setValue(e) {
    const fileList = e.files;
    const file = fileList[0];
    const img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.src = window.URL.createObjectURL(file);
    img.onload = function () {
      const type = file.type;
      setFileType(type);
      const len = Math.ceil(file.size / 1024000);
      var binaryData = [];
      binaryData.push(file);
      const url = new Blob(binaryData, { type: type });
      let reader = new FileReader();
      reader.readAsDataURL(url);
      reader.onload = function () {
        const ref = reader.result;

        if (len <= 1) {
          setBlob([ref]);
        } else {
          const length = ref.length;
          const arr = [];

          for (let i = 0; i < len; i++) {
            const target = ref.slice(
              i * Math.ceil(length / len),
              (i + 1) * Math.ceil(length / len) - 1
            );
            arr.push(target);
          }
          setBlob(arr);
          setBlobSetted(true);
        }
      };
      setFilename(file.name);
    };
  }

  return (
    <section>
      <form>
        <label className="Popup-label" htmlFor="input_file">
          Выберите изображение
        </label>
        <input
          className="Popup-input"
          type="file"
          id="input_file"
          name="input_file"
          required={true}
          placeholder="Выберите изображение"
          onChange={(e) => setValue(e.target)}
        />
        {filename}
      </form>
      {blobSetted ? (
        <article>
          <button onClick={copyName}>{filename}</button>
          {blob.map((btn, ind) => (
            <button
              key={ind}
              onClick={() => {
                copyData(ind);
              }}
            >
              {btn.length}
            </button>
          ))}
        </article>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
