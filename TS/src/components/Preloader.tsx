const Preloader = () => {
  return (
    <div
      id="preloader"
      className="visible fixed inset-0 z-70 flex h-screen w-screen items-center justify-center bg-default-50 opacity-100 transition-all"
    >
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Preloader
