import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: PostComponent,
});

function PostComponent() {
  const { postId } = useParams({ from: "/posts/$postId" });
  return (
    <div className="p-2">
      <h4>Post {postId}</h4>
    </div>
  );
}
