export const json_data = {
  tasks: {
    "import-my-file": {
      operation: "import/url",
      url: "https://my.url/file.docx",
    },
    "convert-my-file": {
      operation: "convert",
      input: "import-my-file",
      input_format: "docx",
      output_format: "pdf",
    },
    "export-my-file": {
      operation: "export/url",
      input: "convert-my-file",
    },
  },
  redirect: true,
};
