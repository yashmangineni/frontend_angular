import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface QA {
  q: string;
  a: string;
}
@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hr.html',
  styleUrls: ['./hr.css']
})
export class Hr {

  qaData: QA[] = [

    { q: 'Tell me about yourself.', a: 'Give a short professional introduction covering education, skills, projects, and career goals. Keep it under 2 minutes.' },
    { q: 'Why should we hire you?', a: 'Highlight your strengths, skills, and how they match the company’s needs. Show confidence without arrogance.' },
    { q: 'What are your strengths?', a: 'Mention 2–3 strengths relevant to the role, e.g., problem-solving, teamwork, adaptability, quick learning.' },
    { q: 'What are your weaknesses?', a: 'Share a real weakness but also how you are improving it, e.g., "I used to struggle with public speaking, but I’m practicing regularly."' },
    { q: 'Where do you see yourself in 5 years?', a: 'Show ambition but align with the company, e.g., "I see myself growing into a senior role and contributing to innovative projects here."' },
    { q: 'Why do you want to work here?', a: 'Show that you researched the company. Mention values, culture, or projects that attract you.' },
    { q: 'Tell me about a challenge you faced and how you overcame it.', a: 'Use the STAR method (Situation, Task, Action, Result) to explain a problem and your solution.' },
    { q: 'How do you handle stress or pressure?', a: 'Show that you stay calm, prioritize tasks, and use positive strategies like time management.' },
    { q: 'Are you a team player?', a: 'Yes – give an example of teamwork from college, projects, or internships.' },
    { q: 'Do you have any questions for us?', a: 'Always ask something, e.g., "What growth opportunities does this role offer?" or "How does the company support learning and development?"' }
  ]
}
