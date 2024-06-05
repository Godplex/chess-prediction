import CodeView from "@components/Code";

export default function Code() {
  return (
    <div
      className="flex justify-center items-center text-foreground min-h-[calc(100vh-65px)] py-6 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://wp.technologyreview.com/wp-content/uploads/2019/07/photo-1528819622765-d6bcf132f793-10.jpg)`,
      }}
    >
      <div className={`absolute inset-0 bg-secondary bg-opacity-50`}></div>
      <CodeView />
    </div>
  );
}
