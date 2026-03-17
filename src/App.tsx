import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LightPresentationFullscreenFrame } from './components/LightPresentationFullscreenFrame';
import { 
  ChevronLeft, ChevronRight, Pause, Play,
  TrendingUp, Users, Target, ShieldCheck, 
  BarChart3, Clock, Smartphone, Award,
  Briefcase, HeartHandshake, Rocket,
  CheckCircle2, ArrowRight, MonitorPlay
} from 'lucide-react';

// --- Shared Background Wrapper ---
const SlideBackground = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`flex flex-col h-full px-20 py-16 relative overflow-hidden bg-slate-50 ${className}`}>
    {/* Fresh Light Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 z-0"></div>
    
    {/* Energetic Colorful Orbs */}
    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[100px] z-0 pointer-events-none"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-400/10 blur-[100px] z-0 pointer-events-none"></div>
    <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-emerald-400/10 blur-[100px] z-0 pointer-events-none"></div>
    
    {/* Grid Pattern Overlay */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0 pointer-events-none"></div>

    <div className="relative z-10 h-full flex flex-col">
      {children}
    </div>
  </div>
);

const SlideHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="mb-16 shrink-0"
  >
    <h2 className="text-6xl font-bold text-slate-800 mb-6 tracking-wider drop-shadow-sm">{title}</h2>
    <div className="flex items-center">
      <div className="h-3 w-24 bg-blue-500 rounded-full mr-6 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
      <span className="text-3xl font-bold tracking-[0.2em] uppercase text-blue-600">{subtitle}</span>
    </div>
  </motion.div>
);

// --- Slides ---

const SlideCover = () => (
  <SlideBackground className="items-center justify-center text-center">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center translate-y-8"
      data-testid="cover-stack"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-12 px-10 py-4 rounded-full bg-blue-50 border border-blue-200 text-blue-600 tracking-widest text-3xl font-medium shadow-sm"
      >
        外卖代运营行业优质服务品牌
      </motion.div>

      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 rounded-full"></div>
        <div className="relative p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl">
          <TrendingUp className="w-32 h-32 text-blue-600" />
        </div>
      </div>
      
      <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-blue-600 mb-10 tracking-tight drop-shadow-sm">
        湖北呈尚营销策划有限公司
      </h1>
      
      <div className="h-2 w-56 bg-gradient-to-r from-blue-500 to-indigo-400 mx-auto mb-12 rounded-full shadow-sm"></div>
      
      <p className="text-4xl md:text-5xl text-slate-600 font-medium tracking-[0.2em] mb-10">
        专注餐饮数字化运营 · 助力商家盈利增长
      </p>
      
      <p className="text-2xl text-slate-400 font-mono tracking-[0.3em] uppercase">
        Chengshang Marketing Planning Co., Ltd.
      </p>
    </motion.div>
  </SlideBackground>
);

const SlideIntro1 = () => (
  <SlideBackground>
    <SlideHeader title="公司简介" subtitle="Company Profile" />
    
    <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:col-span-7 flex flex-col justify-center h-full"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-10 leading-tight">
          专注于美团、淘宝闪购平台的<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">精细化代运营服务</span>
        </h2>
        <p className="text-3xl text-slate-600 mb-16 leading-relaxed font-light">
          我们为餐饮商家提供从店铺上线到持续盈利的全链路解决方案，致力于成为餐饮商家值得信赖的数字化运营合作伙伴。
        </p>
        
        <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl border border-white shadow-xl">
          <h3 className="text-3xl font-bold text-slate-800 mb-10 flex items-center">
            <ShieldCheck className="w-10 h-10 text-blue-500 mr-5" />
            独创六位一体闭环管理模式
          </h3>
          <div className="flex flex-wrap items-center gap-5">
            {['销售', '项目部', '运营', '美工', '售后', '续签'].map((item, index) => (
              <React.Fragment key={item}>
                <div className="px-8 py-4 bg-blue-50 border border-blue-100 text-blue-700 rounded-2xl text-2xl font-medium shadow-sm">
                  {item}
                </div>
                {index < 5 && <ArrowRight className="w-8 h-8 text-blue-300" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:col-span-5 grid grid-cols-2 gap-8 h-full content-center"
      >
        <StatCard icon={Target} title="店铺诊断" desc="深度剖析，精准定位" />
        <StatCard icon={TrendingUp} title="流量优化" desc="多渠道引流，提升曝光" />
        <StatCard icon={BarChart3} title="转化提升" desc="优化页面，提高下单率" />
        <StatCard icon={Users} title="复购增长" desc="会员营销，沉淀私域" />
      </motion.div>
    </div>
  </SlideBackground>
);

const SlideIntro2 = () => (
  <SlideBackground>
    <SlideHeader title="系统与服务" subtitle="System & Services" />
    
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
      {/* Card 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative group bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white shadow-xl flex flex-col hover:bg-white transition-all overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-blue-400/20 blur-3xl rounded-full group-hover:bg-blue-400/30 transition-all"></div>
        <div className="w-28 h-28 bg-blue-50 rounded-3xl flex items-center justify-center mb-12 border border-blue-100 shadow-sm relative z-10">
          <Smartphone className="w-14 h-14 text-blue-500" />
        </div>
        <h3 className="text-5xl font-bold text-slate-800 mb-8 tracking-wide relative z-10">自研管理系统</h3>
        <p className="text-3xl text-slate-600 leading-relaxed mb-12 font-light relative z-10">
          自主研发运营管理系统，深度整合运营流程系统。
        </p>
        <ul className="space-y-8 mt-auto relative z-10">
          <li className="flex items-center text-3xl text-slate-700 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><CheckCircle2 className="w-10 h-10 text-blue-500 mr-5 shrink-0" /> 店铺数据实时追踪</li>
          <li className="flex items-center text-3xl text-slate-700 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><CheckCircle2 className="w-10 h-10 text-blue-500 mr-5 shrink-0" /> 任务精准分配</li>
          <li className="flex items-center text-3xl text-slate-700 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><CheckCircle2 className="w-10 h-10 text-blue-500 mr-5 shrink-0" /> 绩效透明考核</li>
        </ul>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative group bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white shadow-xl flex flex-col hover:bg-white transition-all overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-indigo-400/20 blur-3xl rounded-full group-hover:bg-indigo-400/30 transition-all"></div>
        <div className="w-28 h-28 bg-indigo-50 rounded-3xl flex items-center justify-center mb-12 border border-indigo-100 shadow-sm relative z-10">
          <Clock className="w-14 h-14 text-indigo-500" />
        </div>
        <h3 className="text-5xl font-bold text-slate-800 mb-8 tracking-wide relative z-10">极致响应速度</h3>
        <p className="text-3xl text-slate-600 leading-relaxed mb-12 font-light relative z-10">
          每个合作商家均配备专属微信服务群，提供保姆式贴心服务。
        </p>
        <div className="mt-auto space-y-8 relative z-10">
          <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 shadow-sm">
            <div className="text-2xl text-slate-500 mb-4 font-medium tracking-wider">问题响应时间</div>
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 tracking-tight drop-shadow-sm">≤ 30 分钟</div>
          </div>
          <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 shadow-sm">
            <div className="text-2xl text-slate-500 mb-4 font-medium tracking-wider">运营动作落地</div>
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 tracking-tight drop-shadow-sm">≤ 24 小时</div>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative group bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white shadow-xl flex flex-col hover:bg-white transition-all overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-400/20 blur-3xl rounded-full group-hover:bg-emerald-400/30 transition-all"></div>
        <div className="w-28 h-28 bg-emerald-50 rounded-3xl flex items-center justify-center mb-12 border border-emerald-100 shadow-sm relative z-10">
          <Briefcase className="w-14 h-14 text-emerald-500" />
        </div>
        <h3 className="text-5xl font-bold text-slate-800 mb-8 tracking-wide relative z-10">专业运营团队</h3>
        <p className="text-3xl text-slate-600 leading-relaxed mb-12 font-light relative z-10">
          团队规模稳定在50-100人，汇聚行业精英，经验丰富。
        </p>
        <div className="mt-auto bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100 text-center relative z-10 shadow-sm">
          <div className="flex items-baseline justify-center mb-8">
            <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 tracking-tighter drop-shadow-sm">50-100</span>
            <span className="text-4xl text-slate-500 ml-5 font-medium">人</span>
          </div>
          <p className="text-3xl text-emerald-700 tracking-widest font-medium">稳定专业的核心运营团队</p>
        </div>
      </motion.div>
    </div>
  </SlideBackground>
);

const SlideCulture = () => {
  const cultures = [
    { icon: Target, title: "愿景目标", desc: "打造外卖代运营行业优质服务品牌", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: Rocket, title: "核心使命", desc: "用数据驱动运营决策，助力餐厅实现盈利增长", color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
    { icon: Award, title: "服务承诺", desc: "结果导向，效果说话，不达目标不收费", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
    { icon: Users, title: "团队精神", desc: "专业专注、协同高效、客户至上", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100" },
    { icon: HeartHandshake, title: "价值理念", desc: "以商家成功为己任，以团队成长为根本", color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" },
  ];

  return (
    <SlideBackground>
      <SlideHeader title="企业文化" subtitle="Corporate Culture" />
      
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {cultures.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-center bg-white/80 hover:bg-white transition-all duration-300 p-8 rounded-[2rem] border border-white shadow-lg group"
            >
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mr-10 shrink-0 ${item.bg} border ${item.border} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <item.icon className={`w-12 h-12 ${item.color}`} />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-slate-800 mb-4 tracking-wide">{item.title}</h3>
                <p className="text-3xl text-slate-600 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideBackground>
  );
};

const SlideHistory = () => {
  const history = [
    { year: "2023", color: "from-blue-500 to-blue-700", items: [
      { q: "Q1", text: "公司正式成立，确立外卖代运营专业化服务方向" },
      { q: "Q2", text: "建立标准化运营SOP体系，启动自研系统开发" },
      { q: "Q3", text: "完成运营流程系统搭建，实现运营流程数字化" },
      { q: "Q4", text: "团队扩展至20人，服务客户破百，续签率达80%" },
    ]},
    { year: "2024", color: "from-indigo-500 to-indigo-700", items: [
      { q: "Q1", text: "运营管理系统2.0上线，新增智能数据分析功能" },
      { q: "Q2", text: "团队稳定在30-40人，建立完善培训和晋升体系" },
      { q: "Q3", text: "推出精细化运营服务包，服务店铺突破1500家" },
      { q: "Q4", text: "完成品牌升级，获得多项电商服务资质证书" },
    ]},
    { year: "2025", color: "from-violet-500 to-violet-700", items: [
      { q: "Q1", text: "启动区域扩张计划，服务范围覆盖全国各地" },
      { q: "Q2", text: "系统3.0发布，集成AI智能推荐，店铺破3000家" },
      { q: "Q3", text: "截至8月，累计服务店铺突破5000家，建优质案例库" },
      { q: "Q4", text: "全面深化运营体系，筹备AI战略升级，迈向行业头部" },
    ]},
    { year: "2026", color: "from-emerald-500 to-emerald-700", items: [
      { q: "Q1", text: "完成战略升级，深化AI赋能运营体系，服务店铺突破8000家，成功进入外卖代运营行业头部梯队", highlight: true },
    ]}
  ];

  return (
    <SlideBackground>
      <SlideHeader title="发展历程" subtitle="Development History" />
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 h-full mt-6">
        {history.map((yearGroup, index) => (
          <motion.div 
            key={yearGroup.year}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col h-full"
          >
            <div className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${yearGroup.color} mb-10 drop-shadow-sm`}>
              {yearGroup.year}
            </div>
            
            <div className="grid grid-rows-4 gap-6 flex-1 pb-6">
              {yearGroup.items.map((item, iIndex) => (
                <div 
                  key={item.q} 
                  className={`p-6 rounded-3xl border backdrop-blur-md transition-all flex flex-col justify-center shadow-sm ${
                    item.highlight 
                      ? 'bg-emerald-50 border-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                      : 'bg-white/80 border-white hover:bg-white'
                  }`}
                >
                  <div className={`text-3xl font-bold mb-3 ${item.highlight ? 'text-emerald-600' : 'text-blue-600'}`}>
                    {item.q}
                  </div>
                  <div className={`text-xl xl:text-2xl leading-snug xl:leading-relaxed ${item.highlight ? 'text-emerald-900 font-medium' : 'text-slate-600 font-light'}`}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideBackground>
  );
};

const SlideClosing = () => (
  <SlideBackground className="items-center justify-center text-center">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center translate-y-8"
      data-testid="closing-stack"
    >
      <div className="mb-16 relative">
        <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
        <div className="relative p-12 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-xl">
          <HeartHandshake className="w-36 h-36 text-blue-600" />
        </div>
      </div>
      <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-blue-600 mb-10 tracking-tight drop-shadow-sm">
        携手呈尚 · 共赢未来
      </h2>
      <p className="text-3xl md:text-4xl text-blue-600 font-light tracking-[0.4em] uppercase mb-20">
        Partner With Chengshang · Win The Future
      </p>
      
      <div className="pt-16 border-t border-slate-200 w-full max-w-5xl flex flex-col items-center">
        <h3 className="text-5xl font-bold text-slate-800 mb-8 tracking-widest">湖北呈尚营销策划有限公司</h3>
        <p className="text-3xl text-slate-500 font-light tracking-widest">餐饮商家值得信赖的数字化运营合作伙伴</p>
      </div>
    </motion.div>
  </SlideBackground>
);

// --- Helper Components ---

const StatCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2rem] border border-white hover:bg-white transition-all duration-300 shadow-xl">
    <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 border border-blue-100 shadow-sm">
      <Icon className="w-10 h-10 text-blue-500" />
    </div>
    <h4 className="text-3xl font-bold text-slate-800 mb-4">{title}</h4>
    <p className="text-2xl text-slate-600 leading-relaxed font-light">{desc}</p>
  </div>
);

// --- Main App Component ---

const slides = [
  SlideCover,
  SlideIntro1,
  SlideIntro2,
  SlideCulture,
  SlideHistory,
  SlideClosing
];

const SLIDE_DURATION = 6000; // 6 seconds per slide for digital signage

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
        setIsPlaying(false); // Pause on manual interaction
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsPlaying(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-play timer
  useEffect(() => {
    let interval: number;
    let progressInterval: number;

    if (isPlaying) {
      const startTime = Date.now();
      
      progressInterval = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
      }, 50);

      interval = window.setInterval(() => {
        nextSlide();
      }, SLIDE_DURATION);
    } else {
      setProgress(0);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <LightPresentationFullscreenFrame>
      <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden font-sans">
      {/* Presentation Container - Full Screen Fill */}
      <div className="relative w-full h-full bg-slate-50 overflow-hidden">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Global Progress Bar (Top) */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-slate-200 z-50">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
            initial={{ width: `${(currentSlide / slides.length) * 100}%` }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Slide Auto-play Progress Bar (Bottom) */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-transparent z-50">
            <div 
              className="h-full bg-blue-500/30"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Navigation Controls (Hidden unless hovered, good for signage) */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-between items-center px-16 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-slate-600 font-mono text-2xl font-bold bg-white/80 px-6 py-3 rounded-xl backdrop-blur-md shadow-sm border border-white">
            {currentSlide + 1} / {slides.length}
          </div>
          
          <div className="flex gap-6">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-5 rounded-full bg-white/80 hover:bg-white text-slate-700 backdrop-blur-md transition-all border border-white shadow-sm"
              title={isPlaying ? "Pause Auto-play" : "Start Auto-play"}
            >
              {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 ml-1" />}
            </button>
            <button 
              onClick={() => { prevSlide(); setIsPlaying(false); }}
              className="p-5 rounded-full bg-white/80 hover:bg-white text-slate-700 backdrop-blur-md transition-all border border-white shadow-sm"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button 
              onClick={() => { nextSlide(); setIsPlaying(false); }}
              className="p-5 rounded-full bg-white/80 hover:bg-white text-slate-700 backdrop-blur-md transition-all border border-white shadow-sm"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        </div>

        {/* Signage Mode Indicator */}
        <div className="absolute top-10 right-16 z-50 flex items-center gap-3 text-slate-500 bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm border border-white shadow-sm">
          <MonitorPlay className="w-6 h-6" />
          <span className="text-lg font-bold tracking-wider uppercase">Signage Mode</span>
        </div>

      </div>
      </div>
    </LightPresentationFullscreenFrame>
  );
}
