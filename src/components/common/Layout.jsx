export default function Layout({ children, title }) {
  return (
    <main ClassName={`layout ${title}`}>
      <h1>{title}</h1>
      {children}
    </main>
  );
}
