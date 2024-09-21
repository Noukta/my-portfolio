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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>
              I will be glad to answer your questions
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
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

              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}

              <Input
                id="subject"
                placeholder="Subject"
                {...register("subject")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <Textarea
              id="message"
              placeholder="Message"
              {...register("message")}
              className={`h-full min-h-32 ${
                errors.message ? "border-destructive" : ""
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              size={"lg"}
              className="w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Toaster />
    </>
  )
}
