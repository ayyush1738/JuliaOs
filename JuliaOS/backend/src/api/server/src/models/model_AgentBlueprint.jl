# This file was generated by the Julia OpenAPI Code Generator
# Do not modify this file directly. Modify the OpenAPI specification instead.


@doc raw"""AgentBlueprint

    AgentBlueprint(;
        tools=nothing,
        strategy=nothing,
        trigger=nothing,
    )

    - tools::Vector{ToolBlueprint} : List of tools the agent can use
    - strategy::StrategyBlueprint : The strategy to guide the agent
    - trigger::TriggerConfig : Configuration for event-based triggering of the agent
"""
Base.@kwdef mutable struct AgentBlueprint <: OpenAPI.APIModel
    tools::Union{Nothing, Vector} = nothing # spec type: Union{ Nothing, Vector{ToolBlueprint} }
    strategy = nothing # spec type: Union{ Nothing, StrategyBlueprint }
    trigger = nothing # spec type: Union{ Nothing, TriggerConfig }

    function AgentBlueprint(tools, strategy, trigger, )
        OpenAPI.validate_property(AgentBlueprint, Symbol("tools"), tools)
        OpenAPI.validate_property(AgentBlueprint, Symbol("strategy"), strategy)
        OpenAPI.validate_property(AgentBlueprint, Symbol("trigger"), trigger)
        return new(tools, strategy, trigger, )
    end
end # type AgentBlueprint

const _property_types_AgentBlueprint = Dict{Symbol,String}(Symbol("tools")=>"Vector{ToolBlueprint}", Symbol("strategy")=>"StrategyBlueprint", Symbol("trigger")=>"TriggerConfig", )
OpenAPI.property_type(::Type{ AgentBlueprint }, name::Symbol) = Union{Nothing,eval(Base.Meta.parse(_property_types_AgentBlueprint[name]))}

function check_required(o::AgentBlueprint)
    o.tools === nothing && (return false)
    o.strategy === nothing && (return false)
    o.trigger === nothing && (return false)
    true
end

function OpenAPI.validate_property(::Type{ AgentBlueprint }, name::Symbol, val)
end
