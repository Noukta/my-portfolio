"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "./ui/toaster"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { send } from "@emailjs/browser"
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "@/constants/email-js"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(4, { message: "Name must be at least 4 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // EmailJs API call
    send(SERVICE_ID, TEMPLATE_ID, data, { publicKey: PUBLIC_KEY })
      .then((response) => {
        toast({
          title: "Message sent!",
          description:
            "Thank you for your message. We'll get back to you soon.",
        })
      })
      .catch((err) => {
        toast({
          title: "Failed to send the message!",
          description: "Check the footer for alternative contacts",
        })
      })
      .finally(() => {
        console.log(data)
        setIsSubmitting(false)
        reset()
      })
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center px-4 py-16"
    >
      <h1 className="text-2xl font-semibold mb-8 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Reach me</CardTitle>
            <CardDescription>
              I will be glad to answer your questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Your Name"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground mt-4"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@mail.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-muted-foreground mt-4"
              >
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Frontend Dev"
                {...register("subject")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mt-4"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="More details about the job."
                {...register("message")}
                className={`h-32 ${errors.message ? "border-destructive" : ""}`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Toaster />
    </section>
  )
}
