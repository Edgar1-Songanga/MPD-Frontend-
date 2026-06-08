"use client";

import { useState } from "react";

export default function FileUpload({
  folder
}: {
  folder: string;
}) {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    setUrl(data.url);
    setLoading(false);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />

      {loading && <p>Uploading...</p>}

      {url && (
        <a href={url} target="_blank">
          View File
        </a>
      )}
    </div>
  );
}