import type { NextPage } from "next";
import FileInput from "../../input/FileInput";
import TextAreaInput from "../../input/TextAreaInput";
import Button from "../../ui/Button";
import {
  FormBody,
  FormContainer,
  FormFooter,
  FormGroup,
} from "./HomeForm.style";

interface HomeFormProps {
  imageName: string;
  imageDownloadUrl?: string;
  onImageChangeHandler: (file: File) => void;
  watermarkText: string;
  onWatermarkChangeHandler: (text: string) => void;
}

const HomeForm: NextPage<HomeFormProps> = function (props) {
  return (
    <FormContainer>
      <FormBody>
        <FormGroup>
          <label>Image File</label>
          <FileInput onChangeHandler={props.onImageChangeHandler} />
        </FormGroup>
        <FormGroup>
          <label>Watermark Text</label>
          <TextAreaInput
            onChangeHandler={(text: string) =>
              props.onWatermarkChangeHandler(text)
            }
            value={props.watermarkText}
          />
        </FormGroup>
      </FormBody>
      <FormFooter>
        <hr />
        <Button
          text="Download"
          onClickHandler={function () {
            if (!props.imageDownloadUrl) return;

            const link = document.createElement("a");
            link.download = props.imageName;
            link.href = props.imageDownloadUrl;
            link.click();
          }}
        />
      </FormFooter>
    </FormContainer>
  );
};

export default HomeForm;
