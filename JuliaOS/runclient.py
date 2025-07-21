from juliaos import JuliaOS
import asyncio

async def main():
    # Using async context manager (recommended)
    async with JuliaOS(host='localhost', port=8052) as client:
        print("Connected to JuliaOS backend!")

        # Use other methods...
        agents = await client.list_agents()
        print(f"Found {len(agents)} agents.")
    # Connection is automatically closed when exiting the context

# Or using manual connection management
async def alternative():
    client = JuliaOS(host='localhost', port=8052)
    await client.connect()
    print("Connected to JuliaOS backend!")

    # Use other methods...
    agents = await client.list_agents()
    print(f"Found {len(agents)} agents.")

    await client.disconnect()

# asyncio.run(main())