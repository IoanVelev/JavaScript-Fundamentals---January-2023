function extractFile(input) {
  let text = input.split("\\");
  let res = text[text.length - 1];
  let fileName = res.substring(0, res.lastIndexOf("."));
  let fileExtension = res.substring(res.lastIndexOf(".") + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
