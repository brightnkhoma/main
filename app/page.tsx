"use client"
import DistributorRow from "@/components/subsiduries/distributor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero";
import { Input } from "@/components/ui/input";
import AnchorageLanding from "@/components/ui/Multifaceted";
import AnchorageSubsidiaries from "@/components/ui/Multifaceted";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { VisionMissionSection } from "@/components/ui/vision";
import { teamMembers } from "@/lib/teamMembers"; 
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
  return (
    <div className="k">
      {/* <HeroSection/> */}
      <AnchorageLanding/>
      <DistributorRow/>
      {/* <VisionMissionSection/> */}
         {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#0e3657]/5 dark:from-gray-900 dark:to-[#0e3657]/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4 border-[#be8e2d] text-[#be8e2d]">
                Our Leadership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0e3657]">Meet Our Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experts dedicated to driving your success
              </p>
              <Separator className="w-20 mx-auto bg-[#be8e2d] h-1 mt-6" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full group overflow-hidden transition-all hover:shadow-lg border-[#be8e2d]/20">
                    <div className="relative overflow-hidden aspect-square">
                      <Avatar className="w-full h-full">
                        <AvatarImage src={member.imageUri} className="group-hover:scale-105 transition-transform duration-500" />
                        <AvatarFallback className="text-4xl bg-[#0e3657] text-[#be8e2d]">{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e3657]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <p className="text-sm">{member.qualification}</p>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl text-[#0e3657]">{member.name}</CardTitle>
                      <CardDescription className="text-[#be8e2d] font-medium">{member.title}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact-us" className="py-20 bg-gradient-to-b from-white max-w-full overflow-auto to-[#0e3657]/5 dark:from-gray-900 dark:to-[#0e3657]/20">
          <div className="container mx-auto px-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4 border-[#be8e2d] text-[#be8e2d]">
                Connect With Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0e3657]">Contact Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let's collaborate to achieve your business goals
              </p>
              <Separator className="w-20 mx-auto bg-[#be8e2d] h-1 mt-6" />
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="rounded-xl overflow-hidden shadow-xl h-full border border-[#be8e2d]/20">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.5243470191076!2d33.76891037386787!3d-13.986894281050253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d3001bc29b93%3A0x7097ce5e1b52fa26!2sThe%20Anchorage%20Group%20Ltd!5e0!3m2!1sen!2smw!4v1756991282447!5m2!1sen!2smw"
                    width="100%"
                    height="400"
                    allowFullScreen={true}
                    loading="lazy"
                    className="border-0"
                  ></iframe>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <Card className="border-0 shadow-lg bg-white dark:bg-[#0e3657]/10">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#0e3657]">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#0e3657]">Name</label>
                          <Input id="name" placeholder="Your name" className="border-[#be8e2d]/50 focus:ring-[#be8e2d]" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#0e3657]">Email</label>
                          <Input id="email" type="email" placeholder="your.email@example.com" className="border-[#be8e2d]/50 focus:ring-[#be8e2d]" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1 text-[#0e3657]">Subject</label>
                        <Input id="subject" placeholder="Subject" className="border-[#be8e2d]/50 focus:ring-[#be8e2d]" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#0e3657]">Message</label>
                        <Textarea id="message" placeholder="Your message" rows={5} className="border-[#be8e2d]/50 focus:ring-[#be8e2d]" />
                      </div>
                      <Button className="w-full bg-[#be8e2d] hover:bg-[#be8e2d]/80 text-white">
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8 space-y-6 max-w-full overflow-auto">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#0e3657] text-[#be8e2d]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#0e3657]">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+265 (0) 993 163 483</p>
                      <p className="text-gray-600 dark:text-gray-300">+265 (0) 993 915 928</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#0e3657] text-[#be8e2d]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className='max-w-full flex flex-col'>
                      <h3 className="text-lg font-semibold mb-2 text-[#0e3657]">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">sales@theanchoragegroup.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#0e3657] text-[#be8e2d]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#0e3657]">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">The Anchorage Group, P.O. Box 1317, Lilongwe, Malawi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  );
}
