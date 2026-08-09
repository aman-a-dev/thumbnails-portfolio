"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IconLoader4, IconBrandInstagram } from "@tabler/icons-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INSTAGRAM_URL =
  "https://www.instagram.com/leul.gfx/?igsh=MTRxbGp3c250anF5eQ==";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    try {
      const instagramMessage = `Hi Leul! 👋

I'd like to get in touch with you.

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📌 Subject: ${formData.subject || "General Inquiry"}

💬 Message:
${formData.message}

Thank you!`;

      await navigator.clipboard.writeText(instagramMessage);

      toast.success("Message copied! Opening Instagram...", {
        description: "Paste the message into the Instagram DM.",
      });

      setTimeout(() => {
        window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
      }, 700);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Could not copy the message automatically. Opening Instagram...",
      );

      setTimeout(() => {
        window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
      }, 700);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
    >
      {/* Main Card */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-2xl border-0 backdrop-blur-sm">
          {/* Header */}
          <CardHeader className="text-center space-y-2 pb-6">
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <CardTitle className="text-3xl font-bold tracking-tight">
                Get in Touch
              </CardTitle>

              <CardDescription className="text-base mt-2">
                Have a question or want to work together? We'd love to hear from
                you.
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent>
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="subject">Subject</Label>

                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </Label>

                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="resize-none"
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <>
                      <IconLoader4 className="mr-2 h-4 w-4 animate-spin" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <IconBrandInstagram className="mr-2 h-5 w-5" />
                      Send via Instagram
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Helper */}
              <motion.p
                variants={itemVariants}
                className="text-center text-xs text-muted-foreground"
              >
                Your message will be copied automatically. Paste it into the
                Instagram DM.
              </motion.p>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
