import { Card } from "@/components/common/Card";
import { TitledSecton } from "@/components/common/TitledSection";

export function Works() {
  return (
    <TitledSecton title="Works">
      <div className="grid grid-cols-2 gap-4">
        <div className="row-span-3">
          <Card
            image={{
              src: "/images/gh-bump.jpg",
              width: 642,
              height: 276,
              alt: "gh-bump sample image",
            }}
            heading="gh-bump"
            content="An extension for gh cli which bumps version of a repository."
            url="https://github.com/johnmanjiro13/gh-bump"
          />
        </div>
        <div className="">
          <Card
            heading="gh-cmcm"
            content="A gh extension which comments to a commit by GitHub API. cmcm means 'commit comment'."
            url="https://github.com/johnmanjiro13/gh-cmcm"
          />
        </div>
        <div>
          <Card
            heading="tokio-fluent"
            content="A fluentd client for Rust using tokio."
            url="https://github.com/johnmanjiro13/tokio-fluent"
          />
        </div>
        <div>
          <Card
            heading="auto-reviewer-assign"
            content="A GitHub Action to assign reviewers to pull requests automatically."
            url="https://github.com/johnmanjiro13/auto-reviewer-assign"
          />
        </div>
      </div>
    </TitledSecton>
  );
}
