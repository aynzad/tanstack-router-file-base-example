import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: PostsComponent,
});

function PostsComponent() {
  return (
    <div className="p-2">
      <h3>Posts:</h3>
      <ol>
        <li>
          <Link to="/posts/$postId" params={{ postId: "1" }}>
            post 1
          </Link>
        </li>
        <li>
          <Link to="/posts/$postId" params={{ postId: "2" }}>
            post 2
          </Link>
        </li>
        <li>
          <Link to="/posts/$postId" params={{ postId: "3" }}>
            post 3
          </Link>
        </li>
      </ol>
    </div>
  );
}
