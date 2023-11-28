export const extractBlocks = (message: string) => {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  } else {
    return [message];
  }
};

export const isCodeBlock = (str: string) => {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
};