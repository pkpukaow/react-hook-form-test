import { useForm, SubmitHandler } from "react-hook-form";

type FormFields = {
  blackCard: number;
  whiteCard: number;
  customCard: number;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      blackCard: 0,
      customCard: 0,
      whiteCard: 0,
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="blackCard">Black Card</label>
      <input
        id="blackCard"
        type="number"
        {...register("blackCard", { required: true, min: 0, max: 10 })}
      />
      {errors.blackCard && (
        <p>This field is required and must be number 0 - 10</p>
      )}

      <label htmlFor="whiteCard">White Card</label>
      <input
        id="whiteCard"
        type="number"
        {...register("whiteCard", { required: true, min: 0, max: 10 })}
      />
      {errors.whiteCard && (
        <p>This field is required and must be number 0 - 10</p>
      )}

      <label htmlFor="customCard">Custom Card</label>
      <input
        id="customCard"
        type="number"
        {...register("customCard", { required: true, min: 0, max: 10 })}
      />
      {errors.customCard && (
        <p>This field is required and must be number 0 - 10</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
