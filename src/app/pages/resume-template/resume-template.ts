import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  downloadUrl: string;
  previewImage: string;
  format: string;
}

interface ResumeTip {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-resume-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-template.html',
  styleUrls: ['./resume-template.css']
})
export class ResumeTemplate {
  
  templates: Template[] = [
    {
      id: '1',
      name: 'Professional Modern',
      description: 'Clean and modern design perfect for tech and business roles',
      category: 'Professional',
      downloadUrl: '#',
      previewImage: 'https://via.placeholder.com/300x400?text=Professional+Modern',
      format: 'DOCX'
    },
    {
      id: '2',
      name: 'IT Specialist',
      description: 'Technical resume template optimized for software developers',
      category: 'Technical',
      downloadUrl: '#',
      previewImage: 'https://via.placeholder.com/300x400?text=IT+Specialist',
      format: 'PDF'
    },
    {
      id: '3',
      name: 'Fresh Graduate',
      description: 'Perfect template for entry-level positions and recent graduates',
      category: 'Entry Level',
      downloadUrl: '#',
      previewImage: 'https://via.placeholder.com/300x400?text=Fresh+Graduate',
      format: 'DOCX'
    },
    {
      id: '4',
      name: 'Creative Designer',
      description: 'Eye-catching template for creative and design professionals',
      category: 'Creative',
      downloadUrl: '#',
      previewImage: 'https://via.placeholder.com/300x400?text=Creative+Designer',
      format: 'PDF'
    },
    {
      id: '5',
      name: 'Executive Level',
      description: 'Sophisticated template for senior management positions',
      category: 'Executive',
      downloadUrl: '#',
      previewImage: 'https://via.placeholder.com/300x400?text=Executive+Level',
      format: 'DOCX'
    },
    {
      id: '6',
      name: 'Minimalist',
      description: 'Simple and clean design that focuses on content',
      category: 'Professional',
      downloadUrl: '#',
      previewImage: 'https://via.placeholder.com/300x400?text=Minimalist',
      format: 'PDF'
    }
  ];

  resumeTips: ResumeTip[] = [
    {
      title: 'Keep It Concise',
      description: 'Limit your resume to 1-2 pages. Focus on the most relevant experiences and achievements.',
      icon: '📄'
    },
    {
      title: 'Use Action Words',
      description: 'Start bullet points with strong action verbs like "Developed", "Managed", "Implemented".',
      icon: '⚡'
    },
    {
      title: 'Quantify Achievements',
      description: 'Include numbers and metrics to demonstrate your impact (e.g., "Increased sales by 25%").',
      icon: '📊'
    },
    {
      title: 'Tailor for Each Job',
      description: 'Customize your resume for each application by highlighting relevant skills and experiences.',
      icon: '🎯'
    },
    {
      title: 'Professional Email',
      description: 'Use a professional email address. Avoid nicknames or unprofessional handles.',
      icon: '✉️'
    },
    {
      title: 'Proofread Carefully',
      description: 'Check for spelling, grammar, and formatting errors. Have someone else review it too.',
      icon: '🔍'
    }
  ];

  selectedCategory: string = 'All';
  
  get categories(): string[] {
    const cats = ['All', ...new Set(this.templates.map(t => t.category))];
    return cats;
  }

  get filteredTemplates(): Template[] {
    if (this.selectedCategory === 'All') {
      return this.templates;
    }
    return this.templates.filter(t => t.category === this.selectedCategory);
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  downloadTemplate(template: Template): void {
    // In a real application, this would trigger the actual download
    alert(`Downloading ${template.name} template in ${template.format} format...`);
    // You would typically call a service to download the file
    // this.resumeService.downloadTemplate(template.id);
  }

  previewTemplate(template: Template): void {
    // In a real application, this would open a preview modal
    alert(`Opening preview for ${template.name} template...`);
  }
}
