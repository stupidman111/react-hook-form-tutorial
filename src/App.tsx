import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Switch } from "./components/ui/switch";
import { formSchema, FormType } from "./schema";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: "male",
      phone: "",
      isDefault: false,
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3 px-4 pb-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/** name */}
          <div className="space-y-2">
            <label htmlFor="name">name</label>
            <Input id="name" {...register("name")} placeholder="your name" />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          {/** gender */}
          <div className="space-y-2">
            <label htmlFor="gender">gender</label>
            <Select
              onValueChange={(value) => {
                if (value === "male" || value === "female") {
                  setValue("gender", value);
                }
              }}
              defaultValue={watch("gender")}
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/** phone */}
          <div className="space-y-2">
            <label htmlFor="phone">phone</label>
            <Input
              id="phone"
              placeholder="your phone number"
              {...register("phone")}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          {/** isDefault */}
          <div className="space-y-2 space-x-4 flex items-center justify-between">
            <label htmlFor="isDefault">isDefault</label>
            <Switch
              id="isDefault"
              onCheckedChange={(checked) => setValue("isDefault", checked)}
              checked={watch("isDefault")}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
