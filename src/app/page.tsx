'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* 头部 */}
      <header className="px-6 py-16 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
          <span className="text-3xl">👨‍🏫</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">郑老师</h1>
        <p className="text-orange-600">帮老师减负的AI工具开发者</p>
      </header>

      {/* 关于我 */}
      <section className="px-6 py-8 max-w-xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">关于我</h2>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-gray-600 leading-relaxed">
            在教育系统干了十几年，看不惯老师每天被重复劳动消耗。
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            我的目标很简单：<span className="text-orange-600 font-medium">把老师最烦的重复工作，变成能直接用的工具</span>。
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            核心工具免费用，验证效果后再考虑付费。定价不会太高，要让普通老师用得起。
          </p>
        </div>
      </section>

      {/* 产品服务 */}
      <section className="px-6 py-8 max-w-xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">我能帮老师做什么</h2>
        <div className="space-y-3">
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="font-medium text-gray-800">课后讲评与反馈助手</h3>
              <p className="text-sm text-gray-500">快速生成作业讲评和反馈</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">✍️</span>
            <div>
              <h3 className="font-medium text-gray-800">作业批改辅助</h3>
              <p className="text-sm text-gray-500">自动识别问题，生成批改建议</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-medium text-gray-800">分层作业设计</h3>
              <p className="text-sm text-gray-500">根据学情自动生成差异化作业</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">💬</span>
            <div>
              <h3 className="font-medium text-gray-800">班主任沟通助手</h3>
              <p className="text-sm text-gray-500">帮老师高效与家长沟通</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="https://zuoyejp.cn" 
            target="_blank"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            全部免费体验 →
          </a>
        </div>
      </section>

      {/* 联系我 */}
      <section className="px-6 py-12 max-w-xl mx-auto text-center">
        <div className="bg-orange-50 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">有问题或想法？</h2>
          <p className="text-gray-600 mb-4">直接找我聊聊</p>
          <a 
            href="https://zuoyejp.cn" 
            target="_blank"
            className="text-orange-600 font-medium hover:underline"
          >
            zuoyejp.cn
          </a>
        </div>
      </section>

      {/* 底部 */}
      <footer className="px-6 py-8 text-center text-gray-400 text-sm">
        © 2024 郑老师 · 帮老师减负
      </footer>
    </div>
  );
}
