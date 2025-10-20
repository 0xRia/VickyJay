const image =
  "https://res.cloudinary.com/dkoe20rzl/image/upload/v1692130992/cover.png";
const creator = "0xria";
const author = creator;

export const url = (slug) => {
  return `https://github.com/0xria${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "0xria - Crybersecurity Engineer",
    description:
      "I enjoy building security systems to safeguard digital assets and data.",
  },
};
