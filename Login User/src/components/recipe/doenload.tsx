
import { Button } from "@mui/material";
import { Recipe } from "../../store/recipesSlice";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const Download = ({recipe} :{recipe:Recipe} ) => {
  const handleDownload = async () => {
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [new TextRun(`recipe: ${recipe.title}`)],
              }),
              new Paragraph({
                children: [new TextRun(`description: ${recipe.description}`)],
              }),
              new Paragraph({
                children: [new TextRun(`difficulty: ${recipe.difficulty}`)],
              }),
              new Paragraph({
                children: [new TextRun(`products: ${recipe.products}`)],
              }),
              new Paragraph({
                children: [new TextRun(`ingredients: ${recipe.ingredients.join(", ")}`)],
              }),
              new Paragraph({
                children: [new TextRun(`instructions: ${recipe.instructions.join("\n")}`)],
              }),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${recipe.title}.docx`);
    } catch (error) {
      console.error("erroe doenkoad the recipe", error);
    }
  };

  return (
    <Button onClick={handleDownload}>
      <DownloadRoundedIcon />
    </Button>
  );
};

export default Download;
