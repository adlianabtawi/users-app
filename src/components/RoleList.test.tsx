import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import RoleList from './RoleList'

afterEach(cleanup)

describe("RoleList", () => {
  it("döljer grundrollen user när användaren har en annan roll", () => {
    render(<RoleList roles={["user", "admin"]} />)

    expect(screen.queryByText("admin")).not.toBeNull()
    expect(screen.queryByText("user")).toBeNull()
  })

  it("visar user när det är den enda rollen", () => {
    render(<RoleList roles={["user"]} />)

    expect(screen.queryByText("user")).not.toBeNull()
  })

  it("visar alla roller utom user när det finns flera", () => {
    render(<RoleList roles={["user", "editor", "support"]} />)

    expect(screen.queryByText("editor")).not.toBeNull()
    expect(screen.queryByText("support")).not.toBeNull()
    expect(screen.queryByText("user")).toBeNull()
  })
})