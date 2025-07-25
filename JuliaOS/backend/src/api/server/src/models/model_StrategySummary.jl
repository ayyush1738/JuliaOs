# This file was generated by the Julia OpenAPI Code Generator
# Do not modify this file directly. Modify the OpenAPI specification instead.


@doc raw"""StrategySummary

    StrategySummary(;
        name=nothing,
    )

    - name::String : Name of the strategy
"""
Base.@kwdef mutable struct StrategySummary <: OpenAPI.APIModel
    name::Union{Nothing, String} = nothing

    function StrategySummary(name, )
        OpenAPI.validate_property(StrategySummary, Symbol("name"), name)
        return new(name, )
    end
end # type StrategySummary

const _property_types_StrategySummary = Dict{Symbol,String}(Symbol("name")=>"String", )
OpenAPI.property_type(::Type{ StrategySummary }, name::Symbol) = Union{Nothing,eval(Base.Meta.parse(_property_types_StrategySummary[name]))}

function check_required(o::StrategySummary)
    o.name === nothing && (return false)
    true
end

function OpenAPI.validate_property(::Type{ StrategySummary }, name::Symbol, val)
end
