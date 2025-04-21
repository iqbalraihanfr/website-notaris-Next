/**
 * @file card.tsx
 * @description Komponen Card yang dapat digunakan untuk menampilkan konten dalam bentuk kartu
 * @author Iqbal Raihan Faturrahman Rahardjo
 * @created 2024
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Komponen Card utama
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props untuk komponen Card
 * @returns {JSX.Element} Komponen Card yang telah dirender
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * Komponen CardHeader untuk bagian header kartu
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props untuk komponen CardHeader
 * @returns {JSX.Element} Komponen CardHeader yang telah dirender
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/**
 * Komponen CardTitle untuk judul kartu
 * @component
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - Props untuk komponen CardTitle
 * @returns {JSX.Element} Komponen CardTitle yang telah dirender
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * Komponen CardDescription untuk deskripsi kartu
 * @component
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Props untuk komponen CardDescription
 * @returns {JSX.Element} Komponen CardDescription yang telah dirender
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/**
 * Komponen CardContent untuk konten utama kartu
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props untuk komponen CardContent
 * @returns {JSX.Element} Komponen CardContent yang telah dirender
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * Komponen CardFooter untuk bagian footer kartu
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props untuk komponen CardFooter
 * @returns {JSX.Element} Komponen CardFooter yang telah dirender
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
