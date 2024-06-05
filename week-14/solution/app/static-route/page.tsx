export default function StaticRoute() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-20 max-w-screen-sm">
        <div className="text-2xl font-bold p-1">Welcome to Static Page</div>
        <div className="mt-8 py-2 text-lg">
          <div className="p-2">
            This paragraph right here is rendered statically using Next.js. By
            generating the content on the server at build time, Next.js ensures
            that search engines can easily rawl and index this page, boosting
            its SEO. Plus, serving static content leads to faster load times and
            a smoother user experience. And if I need interactivity, Next.js
            allows me to use the `use client` directive for specific components.
          </div>
          <div className="p-2">
            Pretty cool, right? Now navigate to the `Client Page` to check how
            interactivity is added in Next.js!
          </div>
        </div>
      </div>
    </div>
  );
}
