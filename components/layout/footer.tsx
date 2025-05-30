"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t bg-muted/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Komal
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              MERN Stack Developer with a passion for creating beautiful,
              responsive web applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Contact Info</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:komalkshirasagar32009@gmail.com" className="hover:text-primary">
                  komalkshirasagar32009@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+918080211162" className="hover:text-primary">
                  +91-8080211162
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Chhatrapati Sambhajinagar, Maharashtra</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Follow Me</h3>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:komalkshirasagar32009@gmail.com"
                className="rounded-full bg-background p-2 text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Komal Kshirsagar. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}