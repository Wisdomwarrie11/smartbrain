export interface Course {
  id: string;
  title: string;
  category: 'Primary' | 'Secondary' | 'Professional' | 'Lifelong';
  description: string;
  longDescription?: string;
  duration: string;
  priceNGN: number;
  priceUSD: number;
  rating: number;
  enrolledCount: number;
  tutorId: string;
  features: string[];
}

export interface Tutor {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  rating?: number;
  coursesCount?: number;
  isCustom?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Enrollment {
  id: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  courseId: string;
  paymentMethod: 'Bank Transfer' | 'Card Payment' | 'USSD' | 'PayPal';
  paymentStatus: 'Pending' | 'Completed';
  currency: 'NGN' | 'USD';
  enrolledAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  submittedAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
}
