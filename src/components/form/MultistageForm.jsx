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
import PhotoUpload from "./PhotoUpload";
import { useDispatch } from "react-redux";
import { addProductInfo } from "../../redux/features/productSlice";
import Review from "../ui/Review";

const MultistageForm = () => {
  // State to manage the current step in the multi-step form
  const [activeStep, setActiveStep] = useState(0);

  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Function to go to the next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Hook to handle form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    // Dispatch form data to Redux store
    dispatch(addProductInfo(data));

    // Reset form fields
    reset();

    // Move to the next step
    handleNext();
  };

  // Steps of the multi-step form
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
      {/* Stepper to show progress through the steps */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <Step key={step.label}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    color: isActive ? "primary.main" : "inherit",
                  },
                }}
              >
                <Box>
                  {/* Step label */}
                  <Typography component="h3" variant="h6" fontWeight={700}>
                    {step.label}
                  </Typography>

                  {/* Step description */}
                  <Typography component="p" fontSize="14px">
                    {step.description}
                  </Typography>
                </Box>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <></>
      ) : (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>
            {/* Step 1: Product Details */}
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
                  register={register("taxAmount", {
                    required: "Tax amount is required",
                  })}
                  name="taxAmount"
                  label="Tax amount"
                  type="number"
                  errors={errors}
                />

                {/* Form submit button */}
                <FormSubmit activeStep={activeStep} steps={steps} />
              </Form>
            )}

            {/* Step 2: Inventory Details */}
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

                {/* Form submit button */}
                <FormSubmit activeStep={activeStep} steps={steps} />
              </Form>
            )}

            {/* Step 3: Add Photo */}
            {activeStep === 2 && (
              <Box>
                <PhotoUpload
                  activeStep={activeStep}
                  steps={steps}
                  handleNext={handleNext}
                />
              </Box>
            )}

            {/* Step 4: Review */}
            {activeStep === 3 && <Review />}
          </Box>
        </>
      )}
    </Box>
  );
};

export default MultistageForm;
