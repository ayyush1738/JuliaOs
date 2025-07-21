# File: backend/agent_registry.jl

include("../julia/src/agents/ScrapeAgent.jl")  # navigate up and into julia/src/agents
using .ScrapeAgent
using .AgentCore  # Assuming this already exists and defines @register_agent

@register_agent "scrape" ScrapeAgent.run
