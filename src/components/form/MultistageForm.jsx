import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Input from "./Input";
import DropdownSelect from "./DropdownSelect";
import Form from "./Form";
import { useForm } from "react-hook-form";
import FormSubmit from "./FormSubmit";

const MultistageForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    handleNext();
  };

  const steps = [
    { label: "Product Details", description: "Select from Menu" },
    {
      label: "Inventory Details",
      description: "A Deep Dive into Inventory Details",
    },
    { label: "Add Photo", description: "Visual Insights Included" },
    { label: "Review", description: "A Comprehensive Review" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => {
          const labelProps = {};

          return (
            <Step key={step.label}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Review Text</Typography>
        </>
      ) : (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>
            {activeStep === 0 && (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  register={register("productTitle", {
                    required: "Product title is required",
                  })}
                  name="productTitle"
                  label="Product title"
                  errors={errors}
                />

                <Input
                  register={register("description", {
                    required: "Description is required",
                  })}
                  name="description"
                  label="Description"
                  multiline={true}
                  errors={errors}
                />

                <DropdownSelect
                  register={register("category", {
                    required: "Category is required",
                  })}
                  name="category"
                  label="Category"
                  errors={errors}
                  control={control}
                />

                <Input
                  register={register("regularPrice", {
                    required: "Regular Price is required",
                  })}
                  name="regularPrice"
                  label="Regular price"
                  type="number"
                  errors={errors}
                />
                <Input
                  register={register("extraPrice", {
                    required: "Extra Price is required",
                  })}
                  name="extraPrice"
                  label="Extra price"
                  type="number"
                  errors={errors}
                />

                <Input
                  register={register("textAmount", {
                    required: "Tax amount is required",
                  })}
                  name="textAmount"
                  label="Tax amount"
                  type="number"
                  errors={errors}
                />

                <FormSubmit activeStep={activeStep} steps={steps} />
              </Form>
            )}

            {activeStep === 1 && (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  register={register("weight", {
                    required: "Weight is required",
                  })}
                  name="weight"
                  label="Weight"
                  errors={errors}
                  type="number"
                />

                <Input
                  register={register("length", {
                    required: "Length is required",
                  })}
                  name="length"
                  label="Length"
                  errors={errors}
                  type="number"
                />

                <Input
                  register={register("height", {
                    required: "Height is required",
                  })}
                  name="height"
                  label="Height"
                  errors={errors}
                  type="number"
                />

                <Input
                  register={register("width", {
                    required: "Width is required",
                  })}
                  name="width"
                  label="Width"
                  errors={errors}
                  type="number"
                />

                <Input
                  register={register("totalStock", {
                    required: "Total Stock is required",
                  })}
                  name="totalStock"
                  label="Total Stock"
                  errors={errors}
                  type="number"
                />

                <FormSubmit activeStep={activeStep} steps={steps} />
              </Form>
            )}
            {activeStep === 2 && <Box>photo</Box>}
            {activeStep === 3 && <Typography>Review</Typography>}
          </Box>
        </>
      )}
    </Box>
  );
};

export default MultistageForm;
