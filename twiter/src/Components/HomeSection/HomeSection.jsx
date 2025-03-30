import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";
const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is requried"),
});
const HomeSection = () => {
  const [upLoadingImage, setUpLoadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleSubmit = (value) => {
    console.log("values", value);
  };

  const handleSelectImage = (event) => {
    setUpLoadingImage(true);
    const imageUrl = event.target.files[0];
    setSelectedImage(imageUrl);
    formik.setFieldValue("image", imageUrl);
    setUpLoadingImage(false);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>

      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar alt="userName" src="" />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-between">
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening"
                  className={`border-none outline-none text-lg bg-transparent w-80 
      ${
        formik.errors.content && formik.touched.content
          ? "border-2 border-red-500"
          : "border-2 border-gray-300"
      } 
      ${formik.touched.content ? "focus:ring-2 focus:ring-blue-500" : ""}`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-400">{formik.errors.content}</span>
                )}
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      bgcolor: "#1e88e5",
                      paddingX: "20px",
                    }}
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
                        {[1,1,1,1].map((item) => <TweetCard/>)}
        <TweetCard/>
      </section>
    </div>
  );
};

export default HomeSection;
