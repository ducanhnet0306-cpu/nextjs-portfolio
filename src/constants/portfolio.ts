import type {
  NavItem,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertItem,
  ContactInfo,
} from '@/types';

export const CV_PATH = '/cv-tran-duc-anh.pdf';
export const CV_FILENAME = 'CV-Tran-Duc-Anh.pdf';

export const MAILTO_LINK =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent('ducanh.net0306@gmail.com')}` +
  `&su=${encodeURIComponent('Cơ hội hợp tác – Trần Đức Anh')}` +
  `&body=${encodeURIComponent('Xin chào Đức Anh,\n\nTôi liên hệ với bạn về cơ hội hợp tác...\n\nTrân trọng,')}`;


export const NAV_ITEMS: NavItem[] = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Học vấn', href: '#education' },
  { label: 'Liên hệ', href: '#contact' },
];

export const HERO_DATA = {
  name: 'Trần Đức Anh',
  title: 'Fullstack Developer',
  subtitle: '.NET · React Native · Next.js',
  description:
    'Ứng dụng kinh nghiệm Fullstack thực chiến vào các sản phẩm có scale lớn. Đóng góp trực tiếp vào tính năng core, hiệu năng hệ thống và khai thác AI Coding tools để tăng tốc delivery.',
  cta: {
    primary: { label: 'Xem dự án', href: '#projects' },
    secondary: { label: 'Liên hệ ngay', href: '#contact' },
  },
};

export const ABOUT_DATA = {
  shortGoal:
    'Ứng dụng kinh nghiệm Fullstack thực chiến (.NET, React Native, Next.js) vào các sản phẩm có scale lớn. Đóng góp trực tiếp vào tính năng core và hiệu năng hệ thống, đồng thời khai thác AI Coding tools để tăng tốc delivery và nâng chất lượng code.',
  longGoal:
    'Đạt vị trí Senior Developer trong 1–2 năm với năng lực độc lập thiết kế kiến trúc và dẫn dắt feature end-to-end. Hướng đến Tech Lead trong 3–5 năm: ra quyết định kỹ thuật, mentor junior và phối hợp chặt với Product.',
  highlights: [
    { label: '2+ năm', desc: 'Kinh nghiệm thực chiến' },
    { label: '6+', desc: 'Dự án production' },
    { label: '3 Platform', desc: 'Web · Mobile · API' },
    { label: 'AI-driven', desc: 'Workflow phát triển' },
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      'React Native & Expo',
      'Next.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5 & CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      '.NET Core 8',
      '.NET Framework',
      'ASP.NET MVC',
      'Web API',
      'Entity Framework',
      'C# (OOP, LINQ, async/await)',
      'RESTful API & JWT',
      'PHP & Laravel',
    ],
  },
  {
    title: 'Cơ sở dữ liệu',
    icon: '🗄️',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'Stored Procedure',
      'Query Optimization',
      'JSONB & Indexing',
    ],
  },
  {
    title: 'AI & Tools',
    icon: '🤖',
    skills: [
      'Claude Code',
      'Cursor Pro',
      'Antigravity',
      'AI Pair Programming',
      'Automated Code Review',
    ],
  },
  {
    title: 'DevOps & Khác',
    icon: '🛠️',
    skills: [
      'Git / GitHub / GitLab',
      'Git Flow',
      'CI/CD',
      'Postman & Swagger',
      'Visual Studio',
      'VS Code',
      'JetBrains Rider',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Công ty Cổ phần Định Anh',
    role: 'Fullstack Developer',
    period: '09/2025 – Hiện tại',
    current: true,
    highlights: [
      'Tối ưu hiệu năng các trang traffic cao trên Muaban.net & Vieclam.net: cải thiện tốc độ tải trang 30–40%, giảm response time API trung bình ~35% thông qua lazy-loading, caching, tối ưu query và SEO.',
      'Phát triển và bổ sung tính năng mới cho nền tảng Mogi.vn theo yêu cầu nghiệp vụ bất động sản, đảm bảo tính ổn định và khả năng mở rộng của hệ thống.',
      'Chủ trì xây dựng Mobile App Việc Làm từ 0 (bắt đầu 02/2026): thiết kế kiến trúc, dựng base source code, triển khai 6 luồng nghiệp vụ chính cho cả iOS & Android.',
      'Phối hợp với team Backend tích hợp API, xử lý bug ưu tiên cao và tối ưu hiệu năng module theo phản hồi thực tế từ người dùng.',
      'Ứng dụng AI Agent (Claude Code, Cursor Pro, Antigravity) vào workflow: tăng tốc coding, tự động hóa code review.',
    ],
  },
  {
    company: 'Tập đoàn Công nghệ Thành Nam',
    role: 'Backend Developer → Fullstack Developer',
    period: '09/2023 – 02/2025',
    current: false,
    highlights: [
      'Phát triển và bảo trì hệ thống web phục vụ cơ quan nhà nước cấp tỉnh, sử dụng ASP.NET Framework, SQL Server và Blazor.',
      'Tham gia toàn bộ vòng đời dự án: phân tích yêu cầu, thiết kế CSDL, xây dựng API backend và phối hợp phát triển giao diện quản trị.',
      'Thiết kế thuật toán nghiệp vụ chuyên ngành (matching việc làm, tổng hợp số liệu báo cáo) và tối ưu hiệu suất truy vấn SQL.',
      'Triển khai và vận hành thực tế tại 3–5 tỉnh thành (Thái Bình, Gia Lai…), phục vụ hàng nghìn người dùng cuối là cán bộ và doanh nghiệp địa phương.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Mobile App Việc Làm – Vieclam.net',
    period: '02/2026 – Hiện tại',
    role: 'Main Mobile Developer',
    description:
      'Ứng dụng tìm việc làm đa nền tảng (iOS & Android), xây dựng từ 0 với đầy đủ luồng nghiệp vụ cho ứng viên và nhà tuyển dụng.',
    highlights: [
      'Dựng base source code, cấu hình môi trường, thiết lập cấu trúc thư mục, navigation, state management và CI/CD.',
      'Triển khai 6 luồng nghiệp vụ chính: đăng ký/đăng nhập, quản lý hồ sơ, tìm kiếm việc làm, ứng tuyển, chat và push notification.',
      'Tối ưu hiệu năng, kích thước bundle và trải nghiệm UX/UI trên cả iOS và Android.',
    ],
    techs: ['React Native', 'Expo', 'TypeScript', 'REST API'],
    links: [{ label: 'Vieclam.net', href: 'https://vieclam.net' }],
  },
  {
    title: 'Tối ưu Muaban.net & Vieclam.net',
    period: '09/2025 – Hiện tại',
    role: 'Fullstack Developer',
    description:
      'Tối ưu toàn diện hiệu năng các trang có lượng truy cập cao, bao gồm cải thiện tốc độ server response, lazy-loading, caching và SEO.',
    highlights: [
      'Cải thiện tốc độ tải trang 30–40% thông qua lazy-loading và tối ưu assets.',
      'Giảm response time API trung bình ~35% bằng caching và tối ưu query database.',
      'Refactor codebase, sửa lỗi nghiệp vụ và bổ sung tính năng mới theo backlog của Product Owner.',
    ],
    techs: ['Next.js', 'TypeScript', '.NET Core', 'PostgreSQL'],
    links: [
      { label: 'Muaban.net', href: 'https://muaban.net' },
      { label: 'Vieclam.net', href: 'https://vieclam.net' },
    ],
  },
  {
    title: 'Nền tảng Mogi.vn – Bất động sản',
    period: '09/2025 – Hiện tại',
    role: 'Fullstack Developer',
    description:
      'Phát triển thêm các tính năng theo yêu cầu nghiệp vụ bất động sản, tích hợp API và đảm bảo dữ liệu nhất quán giữa các module.',
    highlights: [
      'Tích hợp các tính năng mới theo yêu cầu nghiệp vụ bất động sản.',
      'Đảm bảo tính nhất quán dữ liệu giữa các module và hệ thống.',
    ],
    techs: ['Angular', '.NET Framework', 'SQL Server'],
    links: [{ label: 'Mogi.vn', href: 'https://mogi.vn' }],
  },
  {
    title: 'Hệ thống Diễn đàn Dân tộc',
    period: '10/2024 – 01/2025',
    role: 'Fullstack Developer',
    description:
      'Hệ thống quản lý thông tin dân tộc và diễn đàn trực tuyến cho cơ quan chức năng tại Thái Bình và Gia Lai.',
    highlights: [
      'Phát triển hệ thống quản lý thông tin dân tộc, hỗ trợ cơ quan chức năng thảo luận qua diễn đàn trực tuyến.',
      'Thiết kế thuật toán và công thức chuyên ngành để tự động tổng hợp số liệu, sinh báo cáo chính xác.',
      'Xây dựng phiên bản mobile bằng React Native cho cán bộ truy cập thuận tiện.',
    ],
    techs: ['ASP.NET Framework', 'Blazor', 'SQL Server', 'React Native'],
    links: [{ label: 'Xem dự án', href: 'https://diendandantocgialai.vntech.asia' }],
  },
  {
    title: 'Hệ thống Quản lý Di sản Văn hóa',
    period: '04/2024 – 07/2024',
    role: 'Fullstack Developer',
    description:
      'Nền tảng quản lý các di sản văn hóa cấp tỉnh, cho phép người dân tra cứu và cơ quan quản lý cập nhật thông tin.',
    highlights: [
      'Xây dựng nền tảng cho phép người dân tra cứu thông tin di sản văn hóa.',
      'Cơ quan quản lý có thể cập nhật và quản lý dữ liệu di sản theo thời gian thực.',
    ],
    techs: ['ASP.NET Framework', 'Blazor', 'SQL Server'],
    links: [{ label: 'Xem dự án', href: 'https://quanlydisan.vntech.asia' }],
  },
  {
    title: 'Phần mềm Dịch vụ Việc làm',
    period: '12/2023 – 03/2024',
    role: 'Fullstack Developer',
    description:
      'Nền tảng ghép đôi việc làm tuyến tỉnh: ứng viên ứng tuyển, doanh nghiệp tìm kiếm hồ sơ phù hợp với thuật toán matching tự động.',
    highlights: [
      'Xây dựng thuật toán matching tự động giữa ứng viên và vị trí tuyển dụng.',
      'Tối ưu quy trình quản lý danh sách ứng viên và vị trí tuyển dụng.',
    ],
    techs: ['ASP.NET Framework', 'Blazor', 'SQL Server'],
    links: [{ label: 'Xem dự án', href: 'https://vlls.vntech.asia' }],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Cao đẳng kỹ thuật Lý Tự Trọng',
    major: 'Công nghệ Thông tin',
    period: '2018 – 2023',
    gpa: '3.5/4.0',
    note: 'Tốt nghiệp xếp hạng Giỏi',
  },
];

export const CERTS: CertItem[] = [
  { name: 'TOEIC 600', date: '11/2023' },
];

export const CONTACT: ContactInfo = {
  phone: '0375 948 784',
  email: 'ducanh.net0306@gmail.com',
  address: 'Phường 13, Quận Tân Bình, Tp. Hồ Chí Minh',
  dob: '03/06/2003',
};
