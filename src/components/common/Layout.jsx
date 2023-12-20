export default function Layout({ children, title }) {
  return (
    <main ClassName={`layout ${title}`}>
      <figure className="subVisual"></figure>
      <h1>{title}</h1>
      {children}
    </main>
  );
}
