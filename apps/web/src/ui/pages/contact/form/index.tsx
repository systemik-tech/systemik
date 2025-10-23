import { Button } from "ui/src/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "ui/src/components/field";
import { Input } from "ui/src/components/input/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "ui/src/components/select";
import { Textarea } from "ui/src/components/textarea";

export const ContactForm = () => (
  <div className="w-full max-w-md">
    <form>
      <FieldGroup>
        <FieldSet>
          <FieldLegend className="font-bold">
            Tell us how we can help
          </FieldLegend>
        </FieldSet>
        <FieldGroup className="gap-12">
          <Field>
            <FieldLabel className="text-muted-foreground" htmlFor="name">
              Full Name
            </FieldLabel>
            <Input
              autoComplete="name"
              className="border-accent"
              id="name"
              name="name"
              placeholder="Benjamin Franklin"
              required
            />
          </Field>
          <Field>
            <FieldLabel className="text-muted-foreground" htmlFor="email">
              Work Email
            </FieldLabel>
            <Input
              autoComplete="email"
              className="border-accent"
              id="email"
              name="email"
              placeholder="benjaminfranklin@him.com"
              required
            />
          </Field>

          <Field>
            <FieldLabel
              className="text-muted-foreground"
              htmlFor="company-size"
            >
              Company Size
            </FieldLabel>
            <Select defaultValue="1-20">
              <SelectTrigger
                className="border-accent text-muted-foreground"
                id="company-size"
              >
                <SelectValue placeholder="1-20" />
              </SelectTrigger>
              <SelectContent className="border-accent bg-background text-muted-foreground">
                <SelectItem value="1-20">1-20</SelectItem>
                <SelectItem value="20-100">20-100</SelectItem>
                <SelectItem value="100-500">100-500</SelectItem>
                <SelectItem value="500-1000">500-1000</SelectItem>
                <SelectItem value="1000-5000">1000-5000</SelectItem>
                <SelectItem value="5000+">5000+</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel
              className="text-muted-foreground"
              htmlFor="requirements"
            >
              Tell us about your requirements
            </FieldLabel>
            <Textarea
              className="h-24 resize-none border-accent"
              id="requirements"
              placeholder="Add any additional comments"
            />
          </Field>
        </FieldGroup>
        <Field className="grid grid-cols-3" orientation="horizontal">
          <p className="col-span-2 text-xs lg:text-sm">
            You can also email us @systemik.tech.com
          </p>
          <Button
            className="col-span-1"
            disabled
            type="button"
            variant="secondary"
          >
            Send Message
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </div>
);
