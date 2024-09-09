import { Container, Tooltip } from "geist/components";

export function ToolTip() {
  return (
    <Container row>
      <Container center>
        <Tooltip text="The Evil Rabbit Jumped over the Fence">
          <span>Top</span>
        </Tooltip>
      </Container>

      <Container center>
        <Tooltip position="bottom" text="The Evil Rabbit Jumped over the Fence">
          <span>Bottom</span>
        </Tooltip>
      </Container>

      <Container center>
        <Tooltip position="left" text="The Evil Rabbit Jumped over the Fence">
          <span>Left</span>
        </Tooltip>
      </Container>

      <Container center>
        <Tooltip position="right" text="The Evil Rabbit Jumped over the Fence">
          <span>Right</span>
        </Tooltip>
      </Container>
    </Container>
  );
}
