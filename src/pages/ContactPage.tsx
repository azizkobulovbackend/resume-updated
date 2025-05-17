
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showConfig, setShowConfig] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const TELEGRAM_BOT_TOKEN = "7851512988:AAFfxeHglMkz0t8Wljh9MrhuBQqHkD46IWQ"; // Replace with your bot token
  const TELEGRAM_CHAT_ID = "975060358"; // Replace with your chat/user/group ID
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const sendToTelegram = async () => {
  try {
    const messageText = `
📬 <b>New Message from Portfolio</b>

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
💬 <b>Message:</b> ${formData.message}
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || 'Failed to send message to Telegram');
    }

    return true;
  } catch (error) {
    console.error('Telegram Error:', error);
    toast({
      title: "Telegram Error",
      description: "Could not send your message to Telegram. Check bot token/chat ID.",
      variant: "destructive",
    });
    return false;
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields in the form.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Send to Telegram
    const telegramSuccess = await sendToTelegram();
    
    if (telegramSuccess) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="page-transition">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-muted-foreground mb-12">
          Feel free to reach out for collaborations, opportunities, or just to say hi!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are the ways you can reach me directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+998 (99) 4381501</p>
                    <p className="text-xs text-muted-foreground">Preferred contact method</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">azizkobulovbekend@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/azizbek-kobulov-47704731a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/azizbek-kobulov-47704731a
                    </a>
                  </div>
                </div>
                
              </CardContent>
            </Card>
            
          
          </div>
          
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      rows={5}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                    </Button>
                    
                    {!showConfig && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="ml-2" 
                        onClick={() => setShowConfig(true)}
                      >
                        Configure
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
