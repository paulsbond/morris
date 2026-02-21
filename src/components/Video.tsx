export function Video(props: { id: string }) {
  return (
    <iframe
      className="aspect-video w-lg max-w-full"
      src={`https://www.youtube-nocookie.com/embed/${props.id}`}
      allowFullScreen
    ></iframe>
  );
}
